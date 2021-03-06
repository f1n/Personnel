class CreateProfiles < ActiveRecord::Migration
  def self.up
    create_table :profiles do |t|
      t.integer :user_id
      t.string :last_name
      t.string :initials
      t.date :birthdate

      t.timestamps
    end
  end

  def self.down
    drop_table :profiles
  end
end
