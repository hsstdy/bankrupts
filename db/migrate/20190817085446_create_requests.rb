class CreateRequests < ActiveRecord::Migration[5.1]
  def change
    create_table :requests do |t|
      t.datetime :request_time
      t.string :method
      t.string :path

      t.timestamps
    end
  end
end
