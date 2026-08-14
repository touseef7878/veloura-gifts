# The Veloura — Asset Manifest

The frontend uses project-managed `/manus-storage/...` image paths. The downloadable `veloura-asset-pack.zip` contains the local source files for every image currently referenced by `client/src/pages/Home.tsx`.

| Code storage reference | Local source file | Usage |
| --- | --- | --- |
| `veloura-hero_b45c66e8.png` | `source/veloura-hero.png` | Hero gift-box visual |
| `veloura-logo_a1f2b98f.png` | `source/veloura-logo.png` | Header and footer mark |
| `veloura-birthday_39b99753.jpg` | `source/veloura-birthday.jpg` | Birthday collection |
| `veloura-romance_129204c5.jpg` | `source/veloura-romance.jpg` | Romance collection/story visual |
| `veloura-corporate_514cf6a7.jpg` | `source/veloura-corporate.jpg` | Corporate gifting collection |
| `veloura-post-1-snacks_fb76c826.png` | `source/veloura-post-1-snacks.png` | Snack basket post 1 |
| `veloura-post-2-luxury-setup_b0b6a33a.png` | `source/veloura-post-2-luxury-setup.png` | Luxury setup post 2 |
| `veloura-post-3-snack-basket_bc61f6ba.png` | `source/veloura-post-3-snack-basket.png` | Snack hamper post 3 |
| `veloura-post-4-handbag_cbf24e35.png` | `source/veloura-post-4-handbag.png` | Handbag birthday post 4 |
| `veloura-post-5-notes_b728f59a.png` | `source/veloura-post-5-notes.png` | Notes birthday post 5 |
| `veloura-post-6-blue-birthday_324914b3.png` | `source/veloura-post-6-blue-birthday.png` | Blue birthday post 6 |
| `veloura-review-message_b7b05a3e.png` | `source/veloura-review-message.png` | Customer review evidence |

Large media stays outside the source tree for deployment reliability. To reuse an image in another Manus WebDev project, upload it with `manus-upload-file --webdev /path/to/image.png`, then place the returned `/manus-storage/...` path in JSX.
