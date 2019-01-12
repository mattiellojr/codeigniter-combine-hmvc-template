<div class="be-left-sidebar">
  <div class="left-sidebar-wrapper"><a href="#" class="left-sidebar-toggle"><?php echo $subtitle; ?></a>
    <div class="left-sidebar-spacer">
      <div class="left-sidebar-scroll">
        <div class="left-sidebar-content">
          <ul class="sidebar-elements">
            <li class="divider">menu</li>
            <li><a href="<?php echo base_url('dashboard'); ?>"><i class="icon mdi mdi-home"></i><span>Dashboard</span></a>
            </li>
            <li class="parent"><a href="#"><i class="icon mdi mdi-border-all"></i><span>Unit</span></a>
              <ul class="sub-menu">
                <li><a href="<?php echo base_url('unit'); ?>">Unit</a>
                </li>
                <li><a href="tables-datatables.html">Unit Report</a>
                </li>
              </ul>
            </li>
            <li class="parent"><a href="#"><i class="icon mdi mdi-settings"></i><span>Settings</span></a>
              <ul class="sub-menu">
                <li><a href="<?php  echo base_url('users'); ?>">Users</a>
                </li>
              </ul>
            </li>
            <li class="parent"><a href="#"><i class="icon mdi mdi-folder-outline"></i><span>Master</span></a>
              <ul class="sub-menu">
                <li><a href="<?php  echo base_url('unit'); ?>">Unit Type</a>
                </li>
                <li><a href="tables-datatables.html">Customer</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>