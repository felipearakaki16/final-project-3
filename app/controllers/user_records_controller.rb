class UserRecordsController < ApplicationController
  before_action :set_user_record, only: %i(create update)

  def index
    @user_records = UserRecord.where(user: current_user)
    @user = User.find(current_user.id)

    @level_1_created = !@user_records.where(level_id: 1).first.nil? ? @user_records.where(level_id: 1).first.created_at.strftime("%d/%b/%Y - %Hh%Mm") : ""
    @level_1_updated = !@user_records.where(level_id: 1).first.nil? ? @user_records.where(level_id: 1).first.updated_at.strftime("%d/%b/%Y - %Hh%Mm") : ""
    @level_1_completed = !@user_records.where(level_id: 1).first.completed_at.nil? ? @user_records.where(level_id: 1).first.completed_at.strftime("%d/%b/%Y - %Hh%Mm") : ""

    @level_2_created = !@user_records.where(level_id: 2).first.nil? ? @user_records.where(level_id: 2).first.created_at.strftime("%d/%b/%Y - %Hh%Mm") : ""
    @level_2_updated = !@user_records.where(level_id: 2).first.nil? ? @user_records.where(level_id: 2).first.updated_at.strftime("%d/%b/%Y - %Hh%Mm") : ""
    @level_2_completed = !@user_records.where(level_id: 2).first.completed_at.nil? ? @user_records.where(level_id: 2).first.completed_at.strftime("%d/%b/%Y - %Hh%Mm") : ""


    @level_3_created = !@user_records.where(level_id: 3).first.nil? ? @user_records.where(level_id: 3).first.created_at.strftime("%d/%b/%Y - %Hh%Mm") : ""
    @level_3_updated = !@user_records.where(level_id: 3).first.nil? ? @user_records.where(level_id: 3).first.updated_at.strftime("%d/%b/%Y - %Hh%Mm") : ""
    @level_3_completed = !@user_records.where(level_id: 3).first.completed_at.nil? ? @user_records.where(level_id: 3).first.completed_at.strftime("%d/%b/%Y - %Hh%Mm") : ""
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
