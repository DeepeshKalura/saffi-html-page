from PIL import Image

def crop_image_to_phone_dimensions(image_path, output_path):
    # Open the image file
    with Image.open(image_path) as img:
        # Get the original dimensions
        width, height = img.size

        # Calculate the new dimensions for a 9:16 aspect ratio
        new_height = height
        new_width = int(height * 9 / 16)

        if new_width > width:
            new_width = width
            new_height = int(width * 16 / 9)

        # Calculate the cropping box
        left = (width - new_width) / 2
        top = (height - new_height) / 2
        right = (width + new_width) / 1.5
        bottom = (height + new_height) / 2

        # Crop the image
        cropped_img = img.crop((left, top, right, bottom))

        # Save the cropped image
        cropped_img.save(output_path)

# Example usage
crop_image_to_phone_dimensions('/home/deepesh/Development/private/freelance/saffi-html-page/public/assets/bg_1.jpg', 'output_image.jpg')