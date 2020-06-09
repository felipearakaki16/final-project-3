class UserRecordsController < ApplicationController
  before_action :set_user_record, only: %i(show update)

  def show
  end

  def create
    @user_record = UserRecord.new
    @user_record.user = current_user
    @user_record.level_id = params[:level_id]
    @user_record.date = DateTime.now
    if @user_record.save
      redirect_to user_record_path(@user_record.id)
    end
  end

  def update
    @level = @user_record.level
    @level.user = @user_record.user
    @level.unavaiable!
    if @level.save
      @user_record.finished!
      @user_record.save

      redirect_to root_path
    end
  end

  def destroy
    
  end
  

  private

  def set_user_record
    @user_record = user_record.find(params[:id])
  end
end
