import { Delegate, Tenant } from "@/lib/types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DeleteDelegateButton from "./delete-delegate-button";

export default function CurrentDelegates({ delegates, tenants }: { delegates: Delegate[], tenants: Tenant[] }) {
    const tenantMap = new Map(tenants.map(t => [t.id, t]));

    return (
        <div className="max-h-64 overflow-y-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Tenant</TableHead>
                        <TableHead>Task</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {delegates.length > 0 ? (
                        delegates.map(delegate => {
                            const tenant = tenantMap.get(delegate.tenantId);
                            return (
                                <TableRow key={delegate.id}>
                                    <TableCell className="font-medium flex items-center gap-3">
                                        {tenant && (
                                            <>
                                                <Avatar className="h-8 w-8">
                                                    <AvatarImage src={tenant.imageUrl} alt={tenant.name} />
                                                    <AvatarFallback>{tenant.name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                                <span className="truncate">{tenant.name}</span>
                                            </>
                                        )}
                                    </TableCell>
                                    <TableCell className="truncate">{delegate.task}</TableCell>
                                    <TableCell className="text-right">
                                        <DeleteDelegateButton delegateId={delegate.id} />
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    ) : (
                        <TableRow>
                            <TableCell colSpan={3} className="text-center h-24">
                                No tasks have been delegated yet.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
