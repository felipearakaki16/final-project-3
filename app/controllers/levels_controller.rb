class LevelsController < ApplicationController
  
  def index
    @levels = Level.all
  end
  
  def show
    @level = Level.find(params[:id])
  end

  def level1
    @user_records = UserRecord.where(user: current_user)
    check_level = 0
    @user_records.each do |record|
      if record.level_id == 1
        record.updated_at = DateTime.now
        record.save
        check_level = 1
        # raise
      end
    end
  end

  def level2
    
  end

  def level3
    
  end
end

