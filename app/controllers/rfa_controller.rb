require 'hypernova'

class RfaController < CalsBaseController
  around_action :hypernova_render_support

  def index
  end
end
