import React from 'react'
import SearchForm from '../../components/SearchForm.js/SearchForm'
import WarehouseList from '../../components/list/WarehouseList'

function warehouseManagement() {
    return (
        <div className=' w-full h-full  mt-[76px] p-[36px]'>
            <div className='text-white '>
                <div className='text-[32px] mb-[16px]'>Products</div>
                <div className='mb-[40px]'>
                    <SearchForm />
                </div>
                <div onClick={() => navigate('/home/new-product')} className='mb-[24px]'>
                    <button className='text-[15px] block bg-[#b18aff] min-w-[110px] h-[34px] px-[12px] py-[6px] rounded-sm'>Add Products</button>
                </div>
            </div>
            <div>
                <WarehouseList />
            </div>
            <div className='fixed bottom-0 left-[292px] right-[36px] h-[54px] border-t border-black'>
                {/* <Save /> */}
            </div>
        </div>
    )
}

export default warehouseManagement