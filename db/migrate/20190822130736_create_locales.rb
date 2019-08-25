class CreateLocales < ActiveRecord::Migration[5.1]
  def change
    create_table :locales do |t|
      t.string :lang
      t.string :key
      t.string :text

      t.timestamps
    end
  end
end
