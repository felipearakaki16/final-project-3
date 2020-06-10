class LevelsController < ApplicationController
  
  def index
    @levels = Level.all
  end
  
  def show
    @level = Level.find(params[:id])
  end

  def level1
    #@user_records = UserRecord.where(user: current_user)
  end

  def level2
    
  end

  def level3
    
  end
end

