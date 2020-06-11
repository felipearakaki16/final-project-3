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
  end
end

