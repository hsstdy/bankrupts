class LocalesController < ApplicationController

  def show
    ret = {}
    lang = params[:lang].to_s
    if not %[sr-Cyrl sr-Latn zh-Hans zh-Hant].include?(lang)
      lang = lang.gsub(/_.*$/, '')
    end
    Locale.where(lang: lang).each do |l|
      ret[l.key] = l.text
    end
    render json: ret
  end

  def index
    render json: { keys: Locale.keys, locales: Locale.all}
  end

  def save
    locales_params.each do |param|
      if Locale.exists?(param['id'])
        Locale.find(param['id']).update(param)
      else
        Locale.new(param).save
      end
    end
    redirect_to '/'
  end

  private
    def locales_params
      params.permit(locales: [:id, :lang, :key, :text]).require(:locales)
    end
end
