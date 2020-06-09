class LevelsController < ApplicationController
  
  def index
    @levels = Level.all
  end
  
  def show
    @level = Level.find(params[:id])
  end

  def level1
    
  end

  def level2
    
  end

  def level3
    
  end
end

