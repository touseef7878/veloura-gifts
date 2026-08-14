# Enhancement Checklist

- [x] Add smooth anchor scrolling and refined fade-in/reveal loading motion.
- [x] Review the public Instagram profile and incorporate only verifiable social-proof content.
- [x] Add customer-provided review evidence with clear attribution and no fabricated details.
- [x] Add the supplied Veloura logo and customer gift-basket imagery to the website.
- [x] Add practical frontend-only gifting features such as a gallery, occasion filter, and sticky contact affordance.
- [x] Validate responsive layout, motion preferences, navigation, image assets, and contact links.

## Gallery Revision

- [x] Replace the dense screenshot-style gallery cards with split editorial post cards.
- [x] Use cleanly cropped basket imagery on one side and full descriptive copy on the other.
- [x] Prepare 6–7 authentic post descriptions with occasion labels and no invented customer claims.
- [x] Validate the new gallery at desktop and mobile widths, then save the revision.

## Supplied Caption Revision

- [x] Stage the newly supplied six post images for the gallery.
- [x] Replace the gallery copy with the exact user-provided captions.
- [x] Keep the split-gallery images compact and proportionate at desktop, tablet, and mobile widths.
- [x] Validate the updated gallery and save the revision.

## Bug Fix

- [x] Replace the duplicate gallery key with a stable unique key.
- [x] Run type/build checks and verify the React warning is gone.
- [x] Save and deliver the bug-fix checkpoint.

## Project Documentation

- [x] Replace the scaffold README with a project-specific setup and customization guide.
- [x] Document the current stack, file structure, assets, contact links, and deployment workflow.
- [x] Validate the commands and save the documentation version.

## Gallery Category Filter

- [x] Confirm the gallery category labels and current filter state.
- [x] Implement accessible occasion filtering with active-state styling.
- [x] Validate filtered results and responsive behavior, then save the revision.

## Filter Verification Notes

- The rendered gallery now exposes the controls “All gifts,” “Birthdays,” “Snack baskets,” and “Luxury setups.”
- Each control uses an accessible tab role, an `aria-selected` active state, and `aria-controls="gallery-results"`.
- The filtered results container uses `aria-live="polite"` so changes can be announced without disrupting the visitor.

## Reusable Image Assets

- [x] Audit all image URLs referenced by the frontend.
- [x] Match each reference to an available source file and package reusable assets.
- [x] Add an asset manifest and document any generated or external dependency.
- [x] Validate the package and save the asset revision.

## Self-Contained Asset Audit

- [x] Audit all image, icon, favicon, CSS, HTML, manifest, and metadata asset references.
- [x] Copy every visual asset into project-local public folders and update references.
- [x] Verify no Manus, sandbox, placeholder, or temporary visual URL remains in the codebase.
- [x] Validate offline path resolution, production rendering, and the final asset change report.

## Offline Compression Workaround

- [x] Compress oversized local images below the checkpoint threshold while keeping their existing filenames and paths.
- [x] Re-run source, build, served-path, and visual checks after compression.
- [x] Retry the checkpoint and document any remaining asset limitations.

## Verified Instagram Findings

- The public profile is @the_veloura77 / @VeLoura with 65 posts, 53 followers, and a bio centered on customized, premium, memorable gifting for birthdays, anniversaries, and more.
- A public highlight titled “REVIEWS 🔥” is visible.
- The opened highlight visibly contains a customer message with a “10/10” rating praising the basket, cute and presentable packaging, personal notes, snacks, the bag, and the balance of premium and personal presentation. No customer name is visible, so the site must label it as “Customer message shared via Instagram” rather than attach a name.
- The user supplied additional customer/order screenshots and business posts, including snack baskets and customized hampers. These may be displayed as supplied brand content, but customer-review copy must remain attributed and verbatim or clearly summarized.
