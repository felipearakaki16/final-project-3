class ExamplesController < ApplicationController
  def show
    render layout: "base.html.erb"
    @example = Example.find(params[:id])
    @example.level = Level.find(params[:level_id])
  end
end
