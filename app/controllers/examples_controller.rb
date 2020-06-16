class ExamplesController < ApplicationController
  def show
    render layout: "base.html.erb"
    @example = Example.find(params[:id])
    # raise
  end
end
