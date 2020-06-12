class LevelsController < ApplicationController
  
  def index 
    @levels = []
    Level.all.each do |level|
      hash = {}
      hash[:level] = level
      hash[:record] = UserRecord.find_by(user: current_user, level: level)
      @levels << hash
    end
  end
  
  def show
    @level = Level.find(params[:id])
    user_record = UserRecord.find_by(user: current_user, level: @level)
    if user_record.nil?
      user_record = UserRecord.new(user: current_user, level: @level)
      user_record.save
    else
      user_record.updated_at = DateTime.now
      user_record.save
    end
  end

  def example
    
  end



end

