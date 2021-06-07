class UsersController < ApplicationController
  def show
    
  end

  def edit
    @user = user.find_by(id: current_user.id)
  end

  def update
    @user = user.find_by(id: current_user.id)
    @user.update_attributes(user_params)
    if @user.save
      flash[:notice] = '会員情報の更新が完了しました'
      redirect_to users_path
    else
      @user.attributes = user_params
      flash[:failed] = '会員情報の更新が失敗しました。'
      render :edit
    end
  end

  def top; end

  private

  def user_params
    params.require(:user).permit(:name, :image_id, :email)
  end
end
