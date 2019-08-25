# This file should contain all the record creation needed to seed the database with its default  ,values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
locales = []
locales << Locale.new(lang: 'ja', key: 'AVERAGE_WIN_RATE'  ,text: '平均利益率')
locales << Locale.new(lang: 'ja', key: 'AVERAGE_LOOSE_RATE'  ,text: '平均損失率')
locales << Locale.new(lang: 'ja', key: 'BANKRUPT_RATE'  ,text: '破産判定資産')
locales << Locale.new(lang: 'ja', key: 'CHART_TITLE'  ,text: '資産推移')
locales << Locale.new(lang: 'ja', key: 'DISCRIPTION_WIN_RATE'  ,text: 'トレード1回あたりの勝率を入力してください。')
locales << Locale.new(lang: 'ja', key: 'DISCRIPTION_AVERAGE_LOOSE_RATE'  ,text: '負けトレード1回あたりの、平均損失率を入力してください。')
locales << Locale.new(lang: 'ja', key: 'DISCRIPTION_AVERAGE_WIN_RATE'  ,text: '勝ちトレード1回あたりの、平均利益率を入力してください。')
locales << Locale.new(lang: 'ja', key: 'DISCRIPTION_BANKRUPTS_RATE'  ,text: '破産とみなす総資産を0から100で入力してください。')
locales << Locale.new(lang: 'ja', key: 'DISCRIPTION_RESULT'  ,text: '100回のシミュレーションを行いました。</br>そのうち{{count}}回、破産しました。')
locales << Locale.new(lang: 'ja', key: 'ERROR_MAX'  ,text: '0から100の値で入力してください。')
locales << Locale.new(lang: 'ja', key: 'ERROR_MIN'  ,text: '0から100の値で入力してください。')
locales << Locale.new(lang: 'ja', key: 'ERROR_NUMBER'  ,text: '数値を入力してください。')
locales << Locale.new(lang: 'ja', key: 'ERROR_REQUIRED'  ,text: '必須入力です。')
locales << Locale.new(lang: 'ja', key: 'RUN'  ,text: '実行')
locales << Locale.new(lang: 'ja', key: 'TITLE'  ,text: '破産確立シミュレーター')
locales << Locale.new(lang: 'ja', key: 'WIN_RATE'  ,text: '勝率')
locales.each do |l| l.save end
