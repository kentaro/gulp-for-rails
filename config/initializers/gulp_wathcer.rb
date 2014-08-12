if Rails.env.development?
  pid = fork { exec 'gulp watch' }
  Process.detach(pid)
end
