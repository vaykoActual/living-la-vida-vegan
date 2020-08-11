class User < ApplicationRecord
  has_many :recipes, dependent: :destroy
  has_many :comments, dependent: :destroy

  has_secure_password
  
  validates :username, uniqueness: true, presence: true
  validates :email, uniqueness: true, presence: true
  validates :email, format: {with: URI::MailTo::EMAIL_REGEXP}
  validates :password, length: { minimum: 6}
end
