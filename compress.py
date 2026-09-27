from pathlib import Path
from PIL import Image

assets = Path("src/assets")

for file in assets.glob("*.png"):
    try:
        original_size = file.stat().st_size / (1024 * 1024)

        image = Image.open(file)

        # Keep transparency if present
        if image.mode in ("RGBA", "LA"):
            image = image.convert("RGBA")
        else:
            image = image.convert("RGB")

        # Resize very large images
        max_size = 1600

        if max(image.size) > max_size:
            image.thumbnail(
                (max_size, max_size),
                Image.Resampling.LANCZOS
            )

        # Save with SAME filename and SAME .png extension
        image.save(
            file,
            "PNG",
            optimize=True,
            compress_level=9
        )

        new_size = file.stat().st_size / (1024 * 1024)

        print(
            f"{file.name}: "
            f"{original_size:.2f} MB -> {new_size:.2f} MB"
        )

    except Exception as e:
        print(f"ERROR: {file.name} -> {e}")

print("\nCompression complete!")