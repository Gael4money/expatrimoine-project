/*
  # Create orders and customer management tables

  1. New Tables
    - `customers`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
      - `name` (text)
      - `stripe_customer_id` (text)
    
    - `orders`
      - `id` (uuid, primary key)
      - `customer_id` (uuid, references customers)
      - `created_at` (timestamp)
      - `status` (text)
      - `total_amount` (integer)
      - `stripe_payment_intent_id` (text)
      - `products` (jsonb)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to read their own data
*/

-- Create customers table
CREATE TABLE IF NOT EXISTS customers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  name text,
  stripe_customer_id text UNIQUE
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id uuid REFERENCES customers(id),
  created_at timestamptz DEFAULT now(),
  status text NOT NULL,
  total_amount integer NOT NULL,
  stripe_payment_intent_id text UNIQUE,
  products jsonb NOT NULL,
  
  CONSTRAINT valid_status CHECK (status IN ('pending', 'paid', 'failed', 'delivered'))
);

-- Enable RLS
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Customers can read own data"
  ON customers
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Customers can read own orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (customer_id = auth.uid());