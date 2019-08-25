class Locale < ApplicationRecord
  scope :keys,  -> { group(:key).order(:key).select(:key) }
end
