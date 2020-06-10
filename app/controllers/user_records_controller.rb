class UserRecordsController < ApplicationController
  before_action :set_user_record, only: %i(update)

  def index
    @user_records = UserRecord.where(user: current_user)
    @user = User.find(current_user.id)
    # @go = false
    # @user_records.each do |record|
    #   @go#{_record.level_id}
    #   if record.completed_at.nil?

    #   end
    # end

  end

  def update
    @user_record.completed_at = nil
    if @user_record.save
      redirect_to user_records_path
    else
      redirect_to user_records_path
    end

  end

  private

  def set_user_record
    @user_record = UserRecord.find(params[:id])
  end

end
