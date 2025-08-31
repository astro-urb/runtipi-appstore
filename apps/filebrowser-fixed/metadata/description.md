# FileBrowser - Web File Manager (Fixed Authentication)

FileBrowser provides a file managing interface within a specified directory. This is the fixed version with proper authentication setup that works correctly out of the box.

## Features

- **Working Authentication**: Fixed login system that works immediately after installation
- **Clean Interface**: Modern, responsive web UI with dark mode support
- **File Operations**: Upload, download, rename, delete, and edit files
- **User Management**: Create multiple users with different permissions
- **File Sharing**: Generate shareable links for files and folders
- **Search**: Quick file and folder search functionality
- **Mobile Friendly**: Fully responsive design for phones and tablets
- **Custom Branding**: Customize the interface with your own CSS

## What's Fixed

The original FileBrowser app in Runtipi has authentication issues where the default login doesn't work. This version:
- Properly initializes the admin account on first run
- Sets the username/password during installation
- Ensures the database is correctly configured

## Setup Instructions

1. Enter your desired admin username and password during installation
2. Choose the root folder you want to manage
3. Access FileBrowser at the configured port
4. Login with your chosen credentials

## Default Settings

- Port: 8094
- Default root path: /home (configurable during installation)
- Database stored in app data directory