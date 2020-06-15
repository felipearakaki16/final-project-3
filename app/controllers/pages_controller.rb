class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
    @level_one = Level.where(name: 'Level 1').first
  end


  
end
