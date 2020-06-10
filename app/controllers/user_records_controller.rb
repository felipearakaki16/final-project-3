class UserRecordsController < ApplicationController
  before_action :set_user_record, only: %i(update)

  def index
    @user_records = UserRecord.where(user: current_user)
    @user = User.find(current_user.id)
  end

  # def create
  #   @user_record = UserRecord.new
  #   @user_record.user = current_user
  #   @user_record.level_id = params[:level_id]
  #   @user_record.date = DateTime.now
  #   if @user_record.save
  #     redirect_to user_record_path(@user_record.id)
  #   end
  # end

  def update
    # @level = @user_record.level
    # @level.user = @user_record.user
    # @level.unavaiable!
    # if @level.save
    #   @user_record.finished!
    #   @user_record.save

    #   redirect_to root_path
    # end
    @user_record.completed_at = nil
    if @user_record.save
      redirect_to user_records_path
    else
      redirect_to user_records_path
    end

  end

  # def destroy
  #   # @user_record.destroy
  #   # redirect_to user_records_path
  # end
  

  private

  def set_user_record
    @user_record = UserRecord.find(params[:id])
  end

end
