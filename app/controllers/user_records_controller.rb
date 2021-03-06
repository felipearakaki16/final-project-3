class UserRecordsController < ApplicationController
  before_action :set_user_record, only: %i(create update)

  def update
    # user_record = UserRecord.includes(:level).find_by(user: current_user, level: params[:id])
    user_record = UserRecord.includes(:level).find_by(user: current_user, level: UserRecord.find(params[:id]).level)
    user_record.completed_at = DateTime.now
    user_record.save
    redirect_to levels_path # confirmar se vai redirecionar para essa rota
  end

  def create
  end

  private

  def set_user_record
    @user_record = UserRecord.find(params[:id])
  end

end
