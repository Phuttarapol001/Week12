import { Link, useLocation } from 'react-router-dom';
import { Flex, Button, Box } from '@radix-ui/themes';
import { FaRegUserCircle } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";



function Navigation() {
    const location = useLocation();
    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <Box className="border-b border-gray-200 bg-white">
            <Flex gap="3" p="4" justify="center" wrap="wrap">
                <Link to="/" className="no-underline">
                    <Button variant={isActive('/') ? 'solid' : 'soft'} size="3">
                        <FaHouse size={18} /> Home
                    </Button>
                </Link>
                <Link to="/profile" className="no-underline">
                    <Button variant={isActive('/profile') ? 'solid' : 'soft'} size="3">
                        <FaRegUserCircle size={16} /> ประวัติส่วนตัว
                    </Button>
                </Link>
            </Flex>
        </Box>
    );
}
export default Navigation;