class Page < ApplicationRecord

  validates :title, :author, :body, presence: true
end
