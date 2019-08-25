class RequestsController < ApplicationController

  def index
    @requests = Request.count_by_date(params[:from], params[:to])
    render json: @requests.to_json
  end

  def create
    @request = Request.new(request_params)
    ret = {}
    if @request.save
      ret[:message] = 'OK'
    else
      ret[:message] = 'NG'
    end
    render json: ret
  end

  private
    def request_params
      params.require(:request).permit(:request_time, :method, :path)
    end
end
