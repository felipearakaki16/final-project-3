class UsersController < ApplicationController
  before_action :authenticate_user!

  def show
    @user = User.find(params[:id])
    redirect_to root_path unless current_user == @user
    @levels = []
    Level.all.each do |level|
      hash = {}
      hash[:level] = level
      hash[:record] = UserRecord.find_by(user: current_user, level: level)
      @levels << hash
    end
   end
end
