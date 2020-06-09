class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
  end

  def user_record
    @user_records = UserRecord.where(user: current_user)
  end
  
end
