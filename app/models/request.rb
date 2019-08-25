class Request < ApplicationRecord
  validates :request_time, presence: true
  validates :path, presence: true
  validates :method, presence: true

  scope 'recent_count', -> { 
    select('date(request_time) as request_date, count(*) as count')
      .where('request_time > ?', DateTime.now - 3.month)
      .group('date(request_time)')
      .order('date(request_time)')
  }

  scope 'count_by_date', -> (from, to) {
    q = select('date(request_time) as request_date, count(*) as count')
    q = q.where('date(request_time) >= ?', from) if not from.nil?
    q = q.where('date(request_time) <= ?', to) if not to.nil?
    q = q.group('date(request_time)')
    q = q.order('date(request_time)')
  }

end
