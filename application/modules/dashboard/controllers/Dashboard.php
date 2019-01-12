<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
* @author Taufik Anggara - taufikanggara@gmail.com
* For business WA / CALL +62 838-7985-1775
**/

class Dashboard extends MX_Controller {

    public function __construct()
    {
        parent::__construct();
    }

	public function index()
	{

		$data = array(
			'title'       => 'Dashboard',
			'description' => 'Dashboard',
			'content'     => 'index'
		);

		$this->load->view('template',$data);
	}

	public function add()
	{

	}

	public function save()
	{

	}

	public function edit($param)
	{

	}

	public function update()
	{

	}

	public function delete($param)
	{

	}
}