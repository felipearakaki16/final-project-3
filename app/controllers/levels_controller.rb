class LevelsController < ApplicationController
  
  def index
    @levels = Level.all
  end
  
  def show
    @level = Level.find(params[:id])
  end

  def level1
    @user_records = UserRecord.where(user: current_user)
    @user_records.each do |record|
      if record.level_id == 1
        @record_level_1 = record
        record.updated_at = DateTime.now
        record.save
      end
    end
  end

  def level2
    @user_records = UserRecord.where(user: current_user)
    @user_records.each do |record|
      if record.level_id == 2
        record.updated_at = DateTime.now
        record.save
        # raise
      end
    end
  end

  def level3
    @user_records = UserRecord.where(user: current_user)
    @user_records.each do |record|
      if record.level_id == 3
        record.updated_at = DateTime.now
        record.save
      end
    end
  end
end

