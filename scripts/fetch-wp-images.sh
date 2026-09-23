#!/usr/bin/env bash
# Copies the images the site uses off the WordPress install into public/images/.
# Run from a machine that can reach covalenceip.com, while WordPress is still live.
set -euo pipefail
cd "$(dirname "$0")/../public/images"
base=https://covalenceip.com/wp-content/uploads
for f in \
  2024/01/homepage-banner-2.jpg 2024/01/Mask-group-1-1.png 2024/01/map-3.png \
  2024/01/Group-1-2.svg 2024/01/Group-2-1.svg \
  2024/01/image-1-1.svg 2024/01/image-2-1.svg \
  2024/01/pipes-1-1.png 2024/01/bg-2.png 2024/01/map-1.png 2024/01/footer-dots-1.png \
  2024/01/CovalencePurpleLogo.svg 2024/01/CovalencePurpleLogo1.png \
  2024/02/step-1.png 2024/02/step-02.png 2024/02/step-03.png \
  2024/02/David-S-Habachy.jpg 2024/02/David-Krieger.jpg
do
  curl -fsSL -o "$(basename "$f")" "$base/$f"
  echo "ok  $(basename "$f")"
done
