# Custom Runtipi App Store

This is a custom app store for [Runtipi](https://runtipi.io/) with curated self-hosted applications.

## Available Apps

- 🐠 **Seafile** - Professional file sync & share solution (like Dropbox)
- 📁 **FileBrowser Fixed** - Web file manager with working authentication
- 🗃️ **Supabase** - Open source Firebase alternative with PostgreSQL
- 🔍 **Qdrant** - High-performance vector database for AI applications
- 🧪 **Test App** - Simple nginx test application

## How to Use This App Store

### 1. Add to Your Runtipi Instance

In your Runtipi dashboard:

1. Go to **Settings** → **App Stores**
2. Click **Add App Store**
3. Enter the repository URL: `https://github.com/astro-urb/runtipi-appstore`
4. Click **Add** and wait for synchronization

### 2. Install Apps

After adding the app store:
1. Go to **App Store** in your Runtipi dashboard
2. You should see the apps from this custom store
3. Click **Install** on any app you want to use
4. Configure the required settings during installation

## App Store Structure

This app store follows the modern Runtipi v4+ format:

```
runtipi-appstore/
├── apps/
│   ├── seafile/
│   │   ├── config.json
│   │   ├── docker-compose.json
│   │   └── metadata/
│   │       ├── description.md
│   │       └── logo.jpg
│   ├── filebrowser-fixed/
│   ├── supabase/
│   ├── qdrant/
│   └── testapp/
├── tests/
│   └── apps.test.ts
├── package.json
└── README.md
```

## Key Features of This App Store

- ✅ **Modern Format** - Uses Runtipi v4+ dynamic compose format
- ✅ **Tested** - Automated validation of all app configurations
- ✅ **Working Authentication** - FileBrowser app has fixed login issues
- ✅ **Production Ready** - Apps configured for actual use
- ✅ **Documentation** - Detailed descriptions and setup guides

## For Developers

### Testing Locally

Install Bun and run the tests:

```bash
# Install Bun (if not already installed)
curl -fsSL https://bun.sh/install | bash

# Install dependencies and run tests
bun install
bun test
```

### Adding New Apps

1. Create a new directory in `apps/` with the app name (lowercase, no spaces)
2. Add required files:
   - `config.json` - App configuration
   - `docker-compose.json` - Container definitions  
   - `metadata/description.md` - App description
   - `metadata/logo.jpg` or `logo.svg` - App icon
3. Run tests to validate: `bun test`

### Configuration Requirements

Each app must have:
- `"dynamic_config": true` in config.json
- `"tipi_version": 3` for compatibility
- At least one service with `"isMain": true`
- Valid JSON formatting (no YAML files)

## Troubleshooting

### Apps Not Showing Up?

1. **Check Repository Access**: Ensure this repository is public
2. **Verify URL**: Use the exact URL: `https://github.com/astro-urb/runtipi-appstore`
3. **Update App Store**: In Runtipi settings, click "Update App Stores"
4. **Clear Cache**: Restart Runtipi or clear the repos cache
5. **Check Logs**: Look at Runtipi logs for validation errors

### Common Issues

- **Private Repository**: App store repositories must be public
- **Wrong URL**: Make sure you're using the correct GitHub URL
- **Old Runtipi Version**: Requires Runtipi v4.0.0+ for custom app stores
- **Format Errors**: Run `bun test` to check for configuration issues

## Support

If you encounter issues:
1. Check the [official Runtipi documentation](https://runtipi.io/docs)
2. Run the validation tests: `bun test`
3. Open an issue in this repository

## License

Apps in this store retain their original licenses. This app store configuration is MIT licensed.
