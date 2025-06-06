import { AlertConfirm } from '@/components/alert-confirm';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'All Users',
        href: '/users',
    },
    {
        title: 'Add',
        href: '/users/create',
    },
];

export default function User() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="User Management" />
            <div className="p-4">
                <h3 className="mb-3 text-lg font-bold">Form Add User</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="">
                        <div className="mb-3">
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" id="name" placeholder="Ex: John Doe" />
                        </div>
                        <div className="mb-3">
                            <Label htmlFor="email">Email</Label>
                            <Input type="text" id="email" placeholder="Ex: test@example.com" />
                        </div>
                    </div>
                    <div className="">
                        <div className="mb-3">
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" />
                        </div>
                        <div className="mb-3">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input type="password" id="confirmPassword" />
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex justify-end gap-1.5">
                    <Button asChild className="w-fit" variant={'secondary'}>
                        <Link href={route('users.index')}>Back</Link>
                    </Button>
                    <AlertConfirm textButton="Submit" />
                </div>
            </div>
        </AppLayout>
    );
}
