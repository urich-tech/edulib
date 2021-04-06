class Program < ApplicationRecord
	mount_uploader :image, ImageUploader

	has_many_attached :uploads
end

