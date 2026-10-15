import assert from "node:assert/strict";
import { test } from "node:test";
import { existsSync } from "node:fs";
import {
  appProjects,
  appUsageLinks,
  type AppProject,
} from "../src/content/apps.ts";

test("unreleased and archived apps never advertise a usable product", () => {
  const base = appProjects[0];
  for (const status of ["development", "archived"] as const) {
    const app: AppProject = { ...base, status };
    assert.deepEqual(
      appUsageLinks(app).map((link) => link.kind),
      ["source"],
    );
  }
  assert.deepEqual(
    appUsageLinks(base).map((link) => link.kind),
    ["website", "source"],
  );
});

test("published records have verifiable content, real local screens and safe links", () => {
  assert.equal(
    new Set(appProjects.map((app) => app.id)).size,
    appProjects.length,
  );
  for (const app of appProjects) {
    assert.match(app.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(app.evidence.length, `Missing evidence for ${app.id}`);
    for (const locale of ["ja", "en"] as const) {
      assert.ok(app.name[locale].trim());
      assert.ok(app.summary[locale].trim());
      assert.ok(app.background[locale].trim());
      assert.ok(app.features.length);
      app.features.forEach((feature) => assert.ok(feature[locale].trim()));
    }
    for (const screen of app.screens) {
      assert.ok(
        existsSync(`public${screen.src}`),
        `Missing screen ${screen.src}`,
      );
      assert.ok(screen.width > 0 && screen.height > 0);
    }
    for (const link of app.links)
      assert.equal(new URL(link.url).protocol, "https:");
  }
});
