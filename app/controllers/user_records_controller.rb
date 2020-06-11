class UserRecordsController < ApplicationController
  before_action :set_user_record, only: %i(create update)

  def index
    @user_records = UserRecord.where(user: current_user)
    @user = User.find(current_user.id)
  end

  def update
    @user_record.completed_at = nil
    if @user_record.save
      redirect_to user_records_path
    else
      redirect_to user_records_path
    end

  end

  def create
  end

  private

  def set_user_record
    @user_record = UserRecord.find(params[:id])
  end

end
