# Nrusimha Designers

Mobile-friendly tailoring website for Nrusimha Designers in Miyapur, Hyderabad. The Worker serves the homepage, quote and appointment forms, and the owner inbox. Quote requests accept separate photos for material and reference work. Requests and attachments are stored in the R2 binding named `BUCKET`.

## Development

- Main source is `worker/index.js`. No app dependencies or build step are required for Cloudflare Workers.
- Run `npx wrangler dev` to preview with local R2 storage.
- Run `sh scripts/build.sh` to generate the Sites Worker artifact. To deploy through Sites, use that target site's project ID and configure its R2 binding.
- For standalone Cloudflare deployment, provision the R2 bucket named in `wrangler.toml` or update the config to match your bucket.

## Inbox access

The inbox and its photo route require `ADMIN_EMAIL` and a verified identity injected by a trusted deployment gateway. Keep the Worker behind a gateway that strips incoming identity headers and injects its own verified `oai-authenticated-user-email`. A plain public Wrangler deployment does not provide that authentication. Leave the inbox disabled until the gateway is configured and direct access to the Worker is blocked.

Service names and the shop's WhatsApp number are at the top of `worker/index.js`. Estimated prices are provided by quote. No customer records, photos, or credentials are included in this repository.

## Gallery

Add approved garment photos to the `galleryPhotos` array in `worker/index.js`. Each entry takes a display `name`, a `design` category, a photo `src` (an HTTPS URL or embedded image), and descriptive `alt` text. The gallery groups photos by design or lists them alphabetically by name.
