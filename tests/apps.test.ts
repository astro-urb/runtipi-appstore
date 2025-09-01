import { describe, it, expect } from 'bun:test';
import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

const APPS_DIR = join(__dirname, '..', 'apps');

describe('App Store Tests', () => {
  it('should have valid app configurations', async () => {
    const apps = await readdir(APPS_DIR);
    
    for (const app of apps) {
      const appDir = join(APPS_DIR, app);
      
      // Check if config.json exists and is valid
      const configPath = join(appDir, 'config.json');
      const configContent = await readFile(configPath, 'utf-8');
      const config = JSON.parse(configContent);
      
      // Validate required fields
      expect(config.id).toBe(app);
      expect(config.name).toBeDefined();
      expect(config.available).toBe(true);
      expect(config.dynamic_config).toBe(true);
      expect(config.tipi_version).toBe(3);
      expect(config.port).toBeDefined();
      expect(config.version).toBeDefined();
      expect(config.categories).toBeDefined();
      expect(Array.isArray(config.categories)).toBe(true);
      
      // Check if docker-compose.json exists and is valid
      const dockerComposePath = join(appDir, 'docker-compose.json');
      const dockerComposeContent = await readFile(dockerComposePath, 'utf-8');
      const dockerCompose = JSON.parse(dockerComposeContent);
      
      expect(dockerCompose.services).toBeDefined();
      expect(Array.isArray(dockerCompose.services)).toBe(true);
      expect(dockerCompose.services.length).toBeGreaterThan(0);
      
      // Check that at least one service has isMain: true
      const hasMainService = dockerCompose.services.some((service: any) => service.isMain === true);
      expect(hasMainService).toBe(true);
      
      // Check metadata directory
      const metadataDir = join(appDir, 'metadata');
      const descriptionPath = join(metadataDir, 'description.md');
      
      try {
        await readFile(descriptionPath, 'utf-8');
      } catch {
        throw new Error(`${app}: metadata/description.md is missing`);
      }
    }
  });
});
