# Supabase

Supabase is the open source Firebase alternative. Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.

## Features

- **Database**: Every Supabase project is a full Postgres database, the world's most trusted relational database
- **Authentication**: Add user sign ups and logins, securing your data with Row Level Security
- **Instant APIs**: Auto-generated APIs from your database schema. REST and GraphQL
- **Realtime**: Listen to database changes, store and sync user states across clients
- **Storage**: Store, organize, transform, and serve large files. Any media, including videos and images
- **Edge Functions**: Server-side TypeScript functions, distributed globally for the lowest latency

## Getting Started

After installation, access Supabase Studio through your Runtipi dashboard. Use the dashboard credentials you set during installation to login.

The Supabase Studio provides:
- Database management interface
- Authentication configuration
- API documentation
- Storage management
- Real-time data monitoring

## Default Configuration

Your Supabase instance includes:
- PostgreSQL database with extensions
- Authentication service with JWT tokens
- RESTful API with auto-generated endpoints
- Real-time subscriptions
- File storage with image transformation
- Management dashboard

## Security

This installation uses secure random passwords and JWT secrets. Make sure to:
1. Use strong dashboard credentials
2. Configure proper authentication rules
3. Set up Row Level Security policies
4. Use HTTPS in production environments

For production use, consider setting up proper email services for authentication workflows.