class LevelsController < ApplicationController
  
  def index
    @levels = Level.all
  end
  
  def show
    @level = Level.find(params[:id])
  end

  def level1
    @record_level_1 = UserRecord.where(user: current_user, level_id: 1)
    

    if @record_level_1.first.nil?
      @record_level_1 = UserRecord.new(
                                    user_id: current_user.id,
                                    level_id: 1,
                                  )
      @record_level_1.save
    else
      @record_level_1.first.updated_at = DateTime.now
      @record_level_1.first.save
    end
  end

  def level2
    @record_level_2 = UserRecord.where(user: current_user, level_id: 2)
    if @record_level_2.first.nil?
      @record_level_2 = UserRecord.new(
                                    user_id: current_user.id,
                                    level_id: 2,
                                  )
      @record_level_2.save
    else
      @record_level_2.first.updated_at = DateTime.now
      @record_level_2.first.save
    end
  end

  def level3
    @record_level_3 = UserRecord.where(user: current_user, level_id: 3)
    if @record_level_3.first.nil?
      @record_level_3 = UserRecord.new(
                                    user_id: current_user.id,
                                    level_id: 3,
                                  )
      @record_level_3.save
    else
      @record_level_3.first.updated_at = DateTime.now
      @record_level_3.first.save
    end
  end
end

