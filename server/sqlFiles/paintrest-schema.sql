CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- FIXME: how to store image (post_data)
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  post_data TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  user_id INTEGER NOT NULL REFERENCES users on DELETE CASCADE
);