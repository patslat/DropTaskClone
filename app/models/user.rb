class User < ActiveRecord::Base
  attr_accessible :email, :password, :username

  require 'bcrypt'

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
  end

  def authenticate_password(password)
    BCrypt::Password.new(password_digest) == password
  end

  def set_session_token!
    self.session_token = SecureRandom::urlsafe_base64(32)
    save
    return self.session_token
  end
end
